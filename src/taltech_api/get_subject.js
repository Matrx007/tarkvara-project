export async function getSubject(timetableId, subjectId) {
    const res = await fetch(
        "api/search",
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                mode: "OTHER",
                page: 1,
                size: 1000,
                subjectId: subjectId,
                ttId: timetableId,
            }),
        }
    );

    const json = await res.json();

    return json;
}
