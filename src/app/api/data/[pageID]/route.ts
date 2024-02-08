export const GET = (req: Request, { params: { pageID } }: { params: { pageID: string } }) => {



    if (Number(pageID) === 1) {
        return new Response(JSON.stringify(screen1MockData))
    }

    return new Response(pageID)

}

export const POST = async (req: Request, { params: { pageID } }: { params: { pageID: string } }) => {


    const body = await req.json()

    if (Number(pageID) === 1) {

        const filteredElements = screen1MockData.filter((item) => {
            return item.title.toLowerCase().includes(body.search.toLowerCase()) || item.notes.toLowerCase().includes(body.search.toLowerCase()) || item.status.toLowerCase().includes(body.search.toLowerCase())
        })

        return new Response(JSON.stringify(filteredElements))

    }

    return new Response(pageID)

}



const screen1MockData = [
    {
        "id": 1,
        "title": "Task One",
        "status": "Completed",
        "notes": "This task was completed on time."
    },
    {
        "id": 2,
        "title": "Task Two",
        "status": "In Progress",
        "notes": "Currently awaiting feedback."
    },
    {
        "id": 3,
        "title": "Task Three",
        "status": "Not Started",
        "notes": "Scheduled to start next week."
    },
    {
        "id": 4,
        "title": "Task Four",
        "status": "Completed",
        "notes": "Completed ahead of schedule."
    },
    {
        "id": 5,
        "title": "Task Five",
        "status": "Cancelled",
        "notes": "Cancelled due to resource constraints."
    }
]
