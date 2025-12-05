from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Client
from carts.models import Cart


class ClientSerializer(serializers.ModelSerializer):
    email = serializers.CharField(
        validators=[UniqueValidator(queryset=Client.objects.all(), message="Email already exists")]
    )
    
    cart_id = serializers.SerializerMethodField()

    class Meta:
        model = Client
        fields = ['username', 'email', 'password', 'is_superuser', 'id', 'cart_id']
        read_only_fields = ['id', 'date_joined', 'last_login']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data: dict):
        client = Client.objects.create_user(**validated_data)
        return client
    
    def get_cart_id(self, obj):
        cart = getattr(obj, "cart", None)
        return cart.id if cart else None
    
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
    
    
    
    
    
    