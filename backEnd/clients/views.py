from rest_framework.generics import ListCreateAPIView
from .models import Client
from .serializers import ClientSerializer


class ClientView(ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer