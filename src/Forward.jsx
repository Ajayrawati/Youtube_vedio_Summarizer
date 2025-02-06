
const forward = async (link) => {
    try {
        if (!link) {
            throw new Error("No link");
        }

        // Sending a POST request to the Flask server
        const response = await fetch('https://summ-omega.vercel.app/v1/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: link }), // Send the YouTube URL as a JSON object
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch summary');
        }

        // Parse the JSON response
        const data = await response.json();

        // Handle the response data (summary)
        console.log(data.summary); // This is where you will get the summary from the server
        return data.summary;
    } catch (error) {
        // Handle any errors
        console.error('Error:', error);
        return null;
    }
};

export default forward;
