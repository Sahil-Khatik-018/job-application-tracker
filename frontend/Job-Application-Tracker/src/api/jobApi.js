const BASE_URL = "https://job-tracker-backend-b873.onrender.com/api/jobs";

export async function createJob(jobData) {
    const response = await fetch(BASE_URL, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
    });

    return await response.json();
}

export async function updateJob(id, jobData) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jobData),
    });

    return await res.json();
}

export async function deleteJob(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });

    return await res.json();
} 

export async function getAllJobs() {
    const response = await fetch(BASE_URL);
    return await response.json()
}