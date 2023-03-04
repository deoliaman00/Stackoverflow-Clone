from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()
from .models import Question,Answer,Comment
from ckeditor.fields import RichTextField

class UserCreateSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('first_name', 'last_name', 'email', 'password')

  def validate(self, data):
    user = User(**data)
    password = data.get('password')

    try:
      validate_password(password, user)
    except exceptions.ValidationError as e:
      serializer_errors = serializers.as_serializer_error(e)
      raise exceptions.ValidationError(
        {'password': serializer_errors['non_field_errors']}
      )

    return data


  def create(self, validated_data):
    user = User.objects.create_user(
      first_name=validated_data['first_name'],
      last_name=validated_data['last_name'],
      email=validated_data['email'],
      password=validated_data['password'],
    )

    return user


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('first_name', 'last_name', 'email',)

# this is the serializer that is handling the post request of a question getting posted by the user     
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'title', 'body','info', 'user', 'upvotes', 'downvotes', 
                   'num_answers','num_comments','created_at', 'updated_at','tags']
    info=RichTextField()

#This will be the serializer that will take care of the Answer of the Question that was made

class CommentSerializer(serializers.ModelSerializer):
  author=serializers.ReadOnlyField(source='author.username')
  answer=serializers.PrimaryKeyRelatedField(queryset=Answer.objects.all())

  class Meta:
    model=Comment
    fields=['id','body','created_at','author','answer']

class AnswerSerializer(serializers.ModelSerializer):
  comment=CommentSerializer(many=True,read_only=True)
  author=serializers.ReadOnlyField(source='author.username')
  question=serializers.PrimaryKeyRelatedField(queryset=Question.objects.all(),required=True)

  class Meta:
    model=Answer
    fields=['id','body','created_at','author','question','comment']
