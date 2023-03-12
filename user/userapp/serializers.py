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
    fields = ('id','first_name', 'last_name', 'email',)

# this is the serializer that is handling the post request of a question getting posted by the user     
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id','title', 'user','body','tags','upvotes','downvotes','num_answers','num_comments','created_at']
    # info=RichTextField()

#This will be the serializer that will take care of the Answer of the Question that was made

class QuestionUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'upvotes', 'downvotes')

    def update(self, instance, validated_data):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            user = request.user
            if 'upvotes' in validated_data:
                if user in instance.upvoted_by.all():
                    instance.upvoted_by.remove(user)
                    instance.upvotes -= 1
                else:
                    instance.upvoted_by.add(user)
                    instance.upvotes += 1
                    if user in instance.downvoted_by.all():
                        instance.downvoted_by.remove(user)
                        instance.downvotes -= 1
            elif 'downvotes' in validated_data:
                if user in instance.downvoted_by.all():
                    instance.downvoted_by.remove(user)
                    instance.downvotes -= 1
                else:
                    instance.downvoted_by.add(user)
                    instance.downvotes += 1
                    if user in instance.upvoted_by.all():
                        instance.upvoted_by.remove(user)
                        instance.upvotes -= 1
        instance.save()
        return instance

class AnswerUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('id', 'upvotes', 'downvotes')

    def update(self, instance, validated_data):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            user = request.user
            if 'upvotes' in validated_data:
                if user in instance.upvotes_by.all():
                    instance.upvotes_by.remove(user)
                    instance.upvotes -= 1
                else:
                    instance.upvotes_by.add(user)
                    instance.upvotes += 1
                    if user in instance.downvotes_by.all():
                        instance.downvotes_by.remove(user)
                        instance.downvotes -= 1
            elif 'downvotes' in validated_data:
                if user in instance.downvotes_by.all():
                    instance.downvotes_by.remove(user)
                    instance.downvotes -= 1
                else:
                    instance.downvotes_by.add(user)
                    instance.downvotes += 1
                    if user in instance.upvotes_by.all():
                        instance.upvotes_by.remove(user)
                        instance.upvotes -= 1
        instance.save()
        return instance

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
    fields=['id','body','created_at','question','comment','upvotes','downvotes','created_at','author']
