# Generated by Django 3.0.4 on 2020-09-05 12:38

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20200904_1435'),
    ]

    operations = [
        migrations.CreateModel(
            name='Playlists',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Playlist Name', max_length=200)),
                ('description', models.TextField(default='Playlist Description')),
                ('tags', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default='Tags', max_length=200), default=list, size=None)),
                ('playlist_image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='playlist_image', to='app.TrackImage')),
                ('tracks', models.ManyToManyField(to='app.Tracks')),
            ],
            options={
                'db_table': 'playlists',
            },
        ),
    ]
