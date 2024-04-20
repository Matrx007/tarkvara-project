/**
 * Returns the timetable of selected program.
 *
 * Example output JSON:
 * {
 *   "weekDays": [
 *     {
 *       "dow": 1,
 *       "rows": [
 *         {
 *           "time": "09:00 - 15:45",
 *           "subjectCode": "ITC8310",
 *           "subjectName": "Mobiiltelefoni digitaalne ekspertiis",
 *           "subjectNameEn": "Mobile Phone Forensics",
 *           "language": "KEEL_EN",
 *           "required": "NOT_COMPULSORY",
 *           "type": "AINEOSAD_H",
 *           "teachers": [
 *             {
 *               "teacherName": "Matthew James Sorell",
 *               "teacherOccupation": "kaasatud professor",
 *               "teacherOccupationEn": "adjunct professor",
 *               "lastRecognitionYear": null,
 *               "dts": [
 *                 "2024-03-18"
 *               ]
 *             }
 *           ],
 *           "rooms": [
 *             {
 *               "roomNo": "ICT-403",
 *               "dts": [
 *                 "2024-03-18"
 *               ]
 *             }
 *           ],
 *           "weekCodes": [
 *             "NADAL_8"
 *           ],
 *           "dts": [
 *             {
 *               "date": "2024-03-18",
 *               "tetId": 65284
 *             }
 *           ],
 *           "syllabusId": null,
 *           "addInfo": null,
 *           "isDistance": null,
 *           "weekType": "EVEN",
 *           "startTime": "09:00:00",
 *           "endTime": "15:45:00",
 *           "subjectAddInfo": null,
 *           "dow": 1,
 *           "sgs": "IVCM21, IVCM22",
 *           "eventId": null,
 *           "subgroupCode": null
 *         },
 *         ...
 *       ]
 *     },
 *     ...
 *   ]
 * }
 */
export async function getProgram(
    programId,
    curriculumVersionId,
    departmentId,
    timetableId
) {
    const res = await fetch("api/search", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            mode: "OTHER",
            page: 1,
            size: 1000,
            sgId: programId,
            curriculumVersionId: curriculumVersionId,
            departmentId: departmentId,
            ttId: timetableId,
        }),
    });

    const json = await res.json();
    return json;
}
