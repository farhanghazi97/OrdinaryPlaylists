# Generated by Django 3.0.4 on 2020-09-13 02:40

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0016_auto_20200912_0022'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tracks',
            name='social_handle',
        ),
        migrations.AddField(
            model_name='stories',
            name='location',
            field=models.CharField(default='Story Location', max_length=200),
        ),
        migrations.AddField(
            model_name='stories',
            name='tags',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default='Tags', max_length=200), blank=True, default=list, null=True, size=None),
        ),
    ]
