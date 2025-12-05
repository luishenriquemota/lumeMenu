
from rest_framework import serializers
from .models import Cart, CartItem
from plates.models import Plate
from plates.serializers import PlatesSerializer
import ipdb

    


class AddItemToCartSerializer(serializers.ModelSerializer):
    plate_id = serializers.IntegerField()
    quantity = serializers.IntegerField(min_value=1)

    
    class Meta:
        model = CartItem
        fields = ['plate_id', 'quantity']

    def validate_plate_id(self, value):
        if not Plate.objects.filter(id=value).exists():
            raise serializers.ValidationError("Plate not found.")
        return value
    
    def create(self, validated_data):
        request = self.context.get("request")
        client = request.user
        cart = client.cart
        
        plate = Plate.objects.get(id=validated_data['plate_id'])
        
        
        cart_item, created = CartItem.objects.get_or_create(cart=cart, plate=plate, defaults={'quantity': validated_data['quantity']})
        
        if not created:
            cart_item.quantity += validated_data['quantity']
            cart_item.save()
            
        return cart_item
        
        
        
        
class UpdateCartItemSerializer(serializers.ModelSerializer):
    quantity = serializers.IntegerField(min_value=1)
    
    class Meta:
        model = CartItem
        fields = ['quantity']
        

        
class CartItemSerializer(serializers.ModelSerializer):
    plate = PlatesSerializer(read_only=True)
    
    class Meta:
        model = CartItem
        fields = "__all__"
