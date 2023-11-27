import mongoose, { Schema } from "mongoose";

const timeSlotSchema = new mongoose.Schema({
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true,
    },
});

const appointmentSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
    },
    startTime: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    clientName: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    detail: String,
});

const dayScheduleSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
    },
    horariosDisponibles: {
        type: [timeSlotSchema],
        required: true,
    },
    citas: {
        type: [appointmentSchema],
        default: [],
    },
});

const monthlyScheduleSchema = new mongoose.Schema({
    month: {
        type: String,
        required: true,
    },
    days: {
        type: [dayScheduleSchema],
        default: [],
    },
});

const specialistSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
    },
    phone: String,
    street: String,
    city: String,
    world: String,
    specialtys: {
        type: [String],
        required: true,
    },
    monthlySchedule: {
        type: [monthlyScheduleSchema],
        default: [],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

schema

const Specialist = mongoose.model("Specialist", specialistSchema);

export default Specialist;
