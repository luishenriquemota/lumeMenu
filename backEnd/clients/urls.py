from django.urls import path
from . import views


urlpatterns = [
    path('clients/', views.ClientView.as_view()),
    path('login/', views.LoginView.as_view()),
]