"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleResolver = void 0;
const mongoose_1 = require("mongoose");
const type_graphql_1 = require("type-graphql");
const isAuth_1 = require("../middlewares/isAuth");
const Schedule_1 = require("../entities/Schedule");
const ScheduleInput_1 = require("../inputs/ScheduleInput");
let ScheduleResolver = class ScheduleResolver {
    getScheduleUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (userId !== "") {
                    return yield Schedule_1.ScheduleMdl.findOne({
                        user_id: mongoose_1.Types.ObjectId(userId),
                    });
                }
                return null;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    createSchedule(scheduleInput, { payload }, day) {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schedule = yield Schedule_1.ScheduleMdl.findOne({ user_id: payload === null || payload === void 0 ? void 0 : payload.userId });
                if (schedule) {
                    console.log(schedule);
                    if (schedule.days.monday && ((_a = schedule.days.monday) === null || _a === void 0 ? void 0 : _a.length) >= 1) {
                        schedule.days.monday = [
                            ...schedule.days.monday,
                            ...scheduleInput.days.monday,
                        ];
                        schedule.save();
                    }
                    else if (schedule.days.tuesday &&
                        ((_b = schedule.days.tuesday) === null || _b === void 0 ? void 0 : _b.length) >= 1) {
                        schedule.days.tuesday = [
                            ...schedule.days.tuesday,
                            ...scheduleInput.days.tuesday,
                        ];
                        schedule.save();
                    }
                    else if (schedule.days.thursday &&
                        ((_c = schedule.days.thursday) === null || _c === void 0 ? void 0 : _c.length) >= 1) {
                        schedule.days.thursday = [
                            ...schedule.days.thursday,
                            ...scheduleInput.days.thursday,
                        ];
                        schedule.save();
                    }
                    else if (schedule.days.wednesday &&
                        ((_d = schedule.days.wednesday) === null || _d === void 0 ? void 0 : _d.length) >= 1) {
                        schedule.days.wednesday = [
                            ...schedule.days.wednesday,
                            ...scheduleInput.days.wednesday,
                        ];
                        schedule.save();
                    }
                    else if (schedule.days.friday && ((_e = schedule.days.friday) === null || _e === void 0 ? void 0 : _e.length) >= 1) {
                        // schedule.days.[day] = [...schedule.days?.[day], ...days?.[day]];
                        schedule.days.friday = [
                            ...schedule.days.friday,
                            ...scheduleInput.days.friday,
                        ];
                        schedule.save();
                    }
                    else if (schedule.days.saturday &&
                        ((_f = schedule.days.saturday) === null || _f === void 0 ? void 0 : _f.length) >= 1) {
                        schedule.days.saturday = [
                            ...schedule.days.saturday,
                            ...scheduleInput.days.saturday,
                        ];
                        schedule.save();
                    }
                    else if (schedule.days.sunday && ((_g = schedule.days.sunday) === null || _g === void 0 ? void 0 : _g.length) >= 1) {
                        schedule.days.sunday = [
                            ...schedule.days.sunday,
                            ...scheduleInput.days.sunday,
                        ];
                        schedule.save();
                    }
                    return schedule;
                }
                else {
                    scheduleInput.user_id = mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId);
                    return yield Schedule_1.ScheduleMdl.create(scheduleInput);
                }
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    updateSchedule(scheduleInput, day, { payload }, scheduleId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schedule = yield Schedule_1.ScheduleMdl.findOne({
                    user_id: mongoose_1.Types.ObjectId(payload === null || payload === void 0 ? void 0 : payload.userId),
                    _id: scheduleId,
                });
                if (schedule) {
                    console.log("DATA FOR UPDATE", JSON.stringify(scheduleInput.days.saturday));
                    const { days, vacation } = scheduleInput;
                    // const days: any = schedule.days;
                    // const splitD = day.split("|");
                    // const { days: daysInput }: any = scheduleInput;
                    // days?.[splitD[0]].map((d: any) => {
                    //   if (d.id === splitD[1]) {
                    //     d.start = daysInput?.[splitD[0]][0].start;
                    //     d.end = daysInput?.[splitD[0]][0].end;
                    //   }
                    // });
                    yield Schedule_1.ScheduleMdl.updateOne({ user_id: payload === null || payload === void 0 ? void 0 : payload.userId }, { days, vacation });
                }
                /*return await OfferMdl.findOneAndUpdate(
                          {  user_id: Types.ObjectId(payload?.userId), "offers.id": offerId },
                          { $set: { "offers.$": offerInput.offers } },
                          { new : true }
                      );*/
                return schedule;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => Schedule_1.Schedules, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScheduleResolver.prototype, "getScheduleUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Schedule_1.Schedules, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __param(2, (0, type_graphql_1.Arg)("day", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ScheduleInput_1.SchedulesInput, Object, String]),
    __metadata("design:returntype", Promise)
], ScheduleResolver.prototype, "createSchedule", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Schedule_1.Schedules),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Arg)("day")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __param(3, (0, type_graphql_1.Arg)("scheduleId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ScheduleInput_1.SchedulesInput, String, Object, String]),
    __metadata("design:returntype", Promise)
], ScheduleResolver.prototype, "updateSchedule", null);
ScheduleResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Schedule_1.Schedules)
], ScheduleResolver);
exports.ScheduleResolver = ScheduleResolver;
