from django.contrib.auth.models import User

from ..models import TaskList,Task
from ..serializers import TaskListSerializer2,TasksSerializer,UserSerializer


from rest_framework import generics


class TasklistCreate(generics.ListCreateAPIView):
    # queryset = TaskList.objects.all()
    #serializer_class = TaskListSerializer2
    def get_queryset(self):
        return TaskList.objects.all()

    def get_serializer_class(self):
        return TaskListSerializer2



class TaskListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class=TaskListSerializer2


class TasksCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TasksSerializer

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class=TaskListSerializer2


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# class UserDetails(generics.RetrieveUpdateDestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer2

