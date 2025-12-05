
from rest_framework import serializers
from .models import Plate

    
     
        
class PlatesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Plate
        fields = "__all__"
        read_only_fields = ["id", "created_at", "updated_at"]