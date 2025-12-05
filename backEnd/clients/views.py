from rest_framework.generics import ListCreateAPIView
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView, Request, Response, status
from carts.models import Cart
from .models import Client
from .serializers import ClientSerializer, LoginSerializer
from django.contrib.auth import authenticate
from utils.mixins import SerializarByMethodMixin

class ClientView(SerializarByMethodMixin, ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_map = {
        "GET": ClientSerializer,
        "POST": ClientSerializer
        
    }
    
    def perform_create(self, serializer):
        client = serializer.save()
        cart = Cart.objects.create(client=client)
        cart.save()
        


class LoginView(APIView):
    queryset = Token.objects.all()
    serializer_class  = LoginSerializer
    
    def post(self, request: Request) -> Response:
        serialized_login = LoginSerializer(data=request.data)
        serialized_login.is_valid(raise_exception=True)

        client = authenticate(
            username = serialized_login.validated_data['username'],
            password = serialized_login.validated_data['password'],
        )
        
        if not client:
            return Response({"detail": "invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)
        

    
        token, _ = Token.objects.get_or_create(user=client)
        
        return Response({"token": token.key})
    