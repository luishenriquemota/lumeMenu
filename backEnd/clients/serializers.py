from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Client


class ClientSerializer(serializers.ModelSerializer):
    email = serializers.CharField(
        validators=[UniqueValidator(queryset=Client.objects.all(), message="Email already exists")]
    )

    class Meta:
        model = Client
        fields = ['username', 'email', 'password']
        read_only_fields = ['id', 'date_joined', 'last_login']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data: dict):
        client = Client.objects.create_user(**validated_data)

        return client