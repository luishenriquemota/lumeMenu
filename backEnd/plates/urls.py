from django.urls import path
from . import views


urlpatterns = [
    path('plates/', views.PlatesCreateListView.as_view()),
]