from django.contrib import admin
from django.urls import path,include
# from django.views.decorators.csrf import csrf_exempt

from .  import views

urlpatterns = [
    path('room', views.RoomView.as_view()),
    path('create-room',views.CreateRoomView.as_view()),
    path('get-room',views.GetRoom.as_view())

]    