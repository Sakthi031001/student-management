from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.home,name='home'),
    path('student/<int:pk>',views.Students_api,name = 'studentAPI' ),
    path('student/',views.Students_api)
]
