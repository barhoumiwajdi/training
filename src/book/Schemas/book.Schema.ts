import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;
export enum Category {
    ADVENTUR = 'adventure',
    CLASSIC = 'clasic',
    CRIME = 'crime',
}
@Schema({
    timestamps: true
})
export class Book {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    autheur: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    category: Category

}

export const BookSchema = SchemaFactory.createForClass(Book);