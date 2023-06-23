import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Owner } from './OwnerSchema';
export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    breed: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
    owner: Owner;
}

export const CatSchema = SchemaFactory.createForClass(Cat);