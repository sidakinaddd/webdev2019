from django.http import Http404
from ..models import Task, TaskList
from ..serializers import TaskListSerializer2, TasksSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class Tasklist(APIView):
    def get(self, request):
        task_lists = TaskList.objects.all()
        serializer = TaskListSerializer2(task_lists, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        serializer = TaskListSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class TaskListDetail(APIView):
    def get_object(self,pk):
        try:
            return TaskList.objects.get(id=pk)
        except TaskList.DoesNotExist :
            raise Http404
    def get(self, request,pk):
        task_list =self.get_object(pk)
        serializer = TaskListSerializer2(task_list)
        return Response(serializer.data)
    def put(self, request,pk):
        task_list =self.get_object(pk)
        serializer = TaskListSerializer2(instance=task_list,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    def delete(self,request,pk):
        task_list =self.get_object(pk)
        task_list.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
class Tasks(APIView):
    def get_object(self,pk):
        try:
            return TaskList.objects.get(id=pk)
        except TaskList.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        task_list=self.get_object(pk)
        tasks=task_list.task_set.all()
        serialiser = TasksSerializer(tasks, many=True)
        return Response(serialiser.data, status=status.HTTP_200_OK)

class TaskDetail(APIView):
    def get_object(self,pk):
        try:
            return TaskList.objects.get(id=pk)
        except TaskList.DoesNotExist:
            raise Http404
    def get(self,request,pk,ik):
        task_list = self.get_object(pk)
        tasks=task_list.task_set.all()
        for t in tasks:
            if t.id==ik:
                serializer=TasksSerializer(t)
                return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
    def post(self,request):
        serializer=TasksSerializer(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
    def put(self, request, pk, ik):
        task_list = self.get_object(pk)
        tasks = task_list.task_set.all()
        for t in tasks:
            if t.id==ik:
                serializer = TasksSerializer(instance=t,data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(status=status.HTTP_404_NOT_FOUND)
    def delete(self, request, pk, ik):
        task_list = self.get_object(pk)
        tasks = task_list.task_set.all()
        for t in tasks:
            if t.id == ik:
                t.delete()
                return Response('deleted')
        return Response(status=status.HTTP_204_NO_CONTENT)
