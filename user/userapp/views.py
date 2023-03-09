from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework import permissions, status,generics
from .serializers import UserCreateSerializer, UserSerializer,QuestionSerializer,AnswerSerializer,CommentSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated
from .models import Question,Answer,Comment
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
user_account = get_user_model()
class RegisterView(APIView):
  def post(self, request):
    data = request.data

    serializer = UserCreateSerializer(data=data)

    if not serializer.is_valid():
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    user = serializer.create(serializer.validated_data)
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_201_CREATED)



class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        try:
            # delete the refresh token from the database
            refresh_token = request.data.get('refresh_token')
            token = RefreshToken(refresh_token)
            print(refresh_token)
            token.blacklist()
            # return a success response
            return Response({'success': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            # return an error response
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

      
class RetrieveUserView(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def get(self, request):
    user = request.user
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_200_OK)

class CreateQuestionAPIView(CreateAPIView):
    serializer_class=QuestionSerializer

    def create(self,request,*args,**kwargs):
        print(request.data)
        serializer=self.get_serializer(data=request.data)
        print(request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers=self.get_success_headers(serializer.data)
        return Response(serializer.data,status=status.HTTP_201_CREATED,headers=headers)

class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class QuestionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class CreateAnswerAPIView(CreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
class CommentCreateView(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def post(self, request, answer_id, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer, answer_id)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer, answer_id):
        answer = Answer.objects.get(id=answer_id)
        serializer.save(author=self.request.user, answer=answer)


class AnswerList(generics.ListCreateAPIView):
   queryset=Answer.objects.all()
   serializer_class=AnswerSerializer

class AnswerDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset=Answer.objects.all()
   serializer_class=AnswerSerializer

## now we will be adding comment section to the answers list
class CommentList(generics.ListCreateAPIView):
   queryset=Comment.objects.all()
   serializer_class=CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset=Comment.objects.all()
   serializer_class=CommentSerializer