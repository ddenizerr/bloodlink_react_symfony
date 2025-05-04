type SubmitOptions = {
    endpoint: string,
    buildPayload: (formData: FormData) => Record<string, any>,
    onSuccess: (data: any) => void,
    onError: (error: any) => void,
    method?: RequestInit['method'];
}


export const handleSubmit = async (
    e: React.FormEvent,
    {
        endpoint,
        method = 'GET',
        buildPayload,
        onSuccess,
        onError

    }: SubmitOptions
) => {
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = buildPayload(formData);

    try{
        const response = await fetch(`http://127.0.0.1:8000${endpoint}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok){
            throw new Error(data.message || 'Request failed');
        }

        onSuccess(data);

    }catch(error: any){
        onError(error);
    }
}
