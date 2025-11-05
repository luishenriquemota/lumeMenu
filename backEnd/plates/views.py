from .models import Plates
from utils.mixins import SerializarByMethodMixin
from rest_framework.generics import ListCreateAPIView
from .serializers import PlatesSerializer



class PlatesCreateListView( SerializarByMethodMixin, ListCreateAPIView):
    queryset = Plates.objects.all()
    
    serializer_map = {
        "GET": PlatesSerializer,
        "POST": PlatesSerializer
    }
    
    