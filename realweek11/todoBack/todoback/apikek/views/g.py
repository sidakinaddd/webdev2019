from ..models import TaskList,Task
from ..serializers import TaskListSerializer2,TasksSerializer,UserSerializer,UserSerializer2
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated

class TasklistCreate(generics.ListCreateAPIView):
    permission_classes =(IsAuthenticated,)
    # queryset = TaskList.objects.all()
    # serializer_class = TaskListSerializer2
    def get_queryset(self):
        return TaskList.objects.filter(created_by=self.request.user)

    def get_serializer_class(self):
        return TaskListSerializer2

    def perform_create(self,serializer):
        serializer.save(created_by=self.request.user)


class TaskListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class=TaskListSerializer2

# class TasksCreate(generics.ListCreateAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TasksSerializer
class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer2


