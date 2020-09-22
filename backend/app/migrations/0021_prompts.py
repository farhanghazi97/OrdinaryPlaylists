# Generated by Django 3.0.4 on 2020-09-22 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0020_auto_20200914_0647'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prompts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prompt', models.CharField(default='Prompt Text', max_length=200)),
            ],
            options={
                'verbose_name_plural': 'Prompts',
                'db_table': 'Prompts',
            },
        ),
    ]
