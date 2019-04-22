from django.urls import path
from . import views

# urlpatterns = [
#     path('task_lists/', views.task_list),
#     path('task_lists/<int:pk>/', views.task_list_detail),
#     path('task_lists/<int:pk>/tasks/', views.task_list_tasks),
#     path('task_lists/<int:pk>/tasks/<int:ik>/',views.task_list_tasks_detail)
# ]
urlpatterns = [
    path('task_lists/', views.Tasklist.as_view()),
    path('task_lists/<int:pk>/', views.TaskListDetail.as_view()),
    path('task_lists/<int:pk>/tasks/', views.Tasks.as_view()),
    path('task_lists/<int:pk>/tasks/<int:ik>/',views.TaskDetail.as_view())
]