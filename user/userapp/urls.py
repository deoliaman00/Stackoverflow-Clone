from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from .views import RegisterView, RetrieveUserView,CreateQuestionAPIView,QuestionDetail,QuestionList,AnswerList,AnswerDetail,CommentList,CommentDetail,CreateAnswerAPIView


urlpatterns = [
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('token/verify/', TokenVerifyView.as_view()),
    path('register/', RegisterView.as_view()),
    path('user/', RetrieveUserView.as_view()),
    path('questions/create/',CreateQuestionAPIView.as_view(),name='create-question'),
    path('questions/', QuestionList.as_view(), name='question-list'),
    path('questions/<int:pk>/', QuestionDetail.as_view(), name='question-detail'),
    path('answers/create/',CreateAnswerAPIView.as_view()),
    path('answers/',AnswerList.as_view()),
    path('answers/<int:pk>/',AnswerDetail.as_view()),
    path('comments/',CommentList.as_view()),
    path('comments/<int:pk>/',CommentDetail.as_view()),
]