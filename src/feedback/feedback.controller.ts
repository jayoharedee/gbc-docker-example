import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './feedback.model';
import { FilterFeedbackDto } from './dto/filter-feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  createFeedback(@Body() createFeedbackDto: CreateFeedbackDto): Feedback {
    return this.feedbackService.createFeedback(createFeedbackDto)
  }

  @Get()
  getFeedback(@Query() filterfeedback: FilterFeedbackDto): Feedback[] {
    return this.feedbackService.getAllFeedback()
  }
}
