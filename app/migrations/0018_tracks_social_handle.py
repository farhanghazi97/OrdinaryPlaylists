# Generated by Django 3.0.4 on 2020-09-14 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0017_auto_20200913_0240'),
    ]

    operations = [
        migrations.AddField(
            model_name='tracks',
            name='social_handle',
            field=models.CharField(default='Artist Social Handle Link', max_length=200),
        ),
    ]
