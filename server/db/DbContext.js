import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CarSchema} from '../models/Car.js'
import { HouseSchema } from "../models/House.js";
import { JobSchema } from "../models/Job.js";
class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Car = mongoose.model('Car', CarSchema )
  House = mongoose.model('House', HouseSchema)
  Job = mongoose.model('Job', JobSchema)
}

export const dbContext = new DbContext()
