from .models import Cart, CartItem
from rest_framework.permissions import IsAuthenticated
from utils.mixins import SerializarByMethodMixin
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from .serializers import CartItemSerializer, AddItemToCartSerializer, UpdateCartItemSerializer
from django.shortcuts import get_object_or_404



class AddItemToCartView(CreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = AddItemToCartSerializer
    permission_classes = [IsAuthenticated]
    
    
    def perform_create(self, serializer):
        serializer.save()


class ListCartItemsView(ListAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        client = self.request.user
        return CartItem.objects.filter(cart=client.cart)

class UpdateCartItemView(UpdateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = UpdateCartItemSerializer 
    permission_classes = [IsAuthenticated]

    
    def get_queryset(self):
        client = self.request.user
        cart = client.cart
        return CartItem.objects.filter(cart=cart)
    
    


class DeleteCartItemView(DestroyAPIView):
    queryset = CartItem.objects.all()
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        client = self.request.user
        return CartItem.objects.filter(cart=client.cart)
    
