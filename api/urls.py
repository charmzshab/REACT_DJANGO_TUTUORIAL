from django.contrib import admin
from django.urls import path,include

from .  import views

urlpatterns = [
    path('room/', views.RoomView.as_view(),name="room"),
    path('create-room/', views.CreateRoomView.as_view(),name="create-room")

]    