from django.urls import path
from . import views


urlpatterns = [
    path('addItemToCart/', views.AddItemToCartView.as_view(), name='add-item-to-cart'),
    path('items/', views.ListCartItemsView.as_view(), name='list-cart-items'),
    path('edit/<str:pk>/', views.UpdateCartItemView.as_view(), name='update-cart-item'),
    path('delete/<str:pk>/', views.DeleteCartItemView.as_view(), name='delete-cart-item'),
]
