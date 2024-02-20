import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { channelSchema } from 'src/Schema/Channel.Schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Channel', schema: channelSchema },
		]),
	],
  providers: [ChannelService],
  controllers: [ChannelController]
})
export class ChannelModule {}
