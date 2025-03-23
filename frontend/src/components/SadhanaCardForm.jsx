import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SadhanaCardForm = () => {
    // Function to get formatted current time
    const token = localStorage.getItem('token')
    console.log("local storage token :", token)
    const getFormattedTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }); // HH:MM format
    };

    // State for form data
    const [formData, setFormData] = useState({
        wake_up_time: '',
        rounds_chanted: '',
        hours_studied_college: '',
        card_filled_at: getFormattedTime(), // Fixed at form load time
        day_rest: '',
        seva: '',
        cleanliness: '',
        book_reading_sp: '',
    });

    // State for response messages
    const [responseMsg, setResponseMsg] = useState('');
    const [responseStatus, setResponseStatus] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("No token found. Please login.");
            setResponseMsg('Authentication error: Please login.');
            setResponseStatus('error');
            return;
        }

        // Format wake-up time correctly
        const formattedWakeUpTime = formData.wake_up_time ? `${formData.wake_up_time}:00` : '';

        // Prepare complete form data
        const requestData = {
            wake_up_time: formattedWakeUpTime,
            rounds_chanted: formData.rounds_chanted,
            hours_studied_college: formData.hours_studied_college,
            card_filled_at: formData.card_filled_at, // Fixed submission time
            day_rest: formData.day_rest,
            seva: formData.seva,
            cleanliness: formData.cleanliness,
            book_reading_sp: formData.book_reading_sp,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/sadhana/', requestData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            console.log("Form Response:", response);
            setResponseMsg('Sadhana card submitted successfully!');
            setResponseStatus('success');

            // Reset form but keep "Sadhana Card Filled At" fixed
            setFormData({
                wake_up_time: '',
                rounds_chanted: '',
                hours_studied_college: '',
                card_filled_at: getFormattedTime(), // Reset to current time
                day_rest: '',
                seva: '',
                cleanliness: '',
                book_reading_sp: '',
            });

        } catch (error) {
            console.error("Error submitting form:", error.response ? error.response.data : error);
            setResponseMsg('Error submitting sadhana card. Please try again.');
            setResponseStatus('error');
        }
    };

    // Styles
    const styles = {
        container: { maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' },
        header: { textAlign: 'center', marginBottom: '15px' },
        form: { display: 'flex', flexDirection: 'column' },
        formGroup: { marginBottom: '10px' },
        label: { fontWeight: 'bold', display: 'block', marginBottom: '5px' },
        input: { width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' },
        select: { width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' },
        submitButton: { backgroundColor: '#28a745', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' },
        responseMessage: { textAlign: 'center', padding: '10px', borderRadius: '5px', marginTop: '10px' },
        successMessage: { backgroundColor: '#d4edda', color: '#155724' },
        errorMessage: { backgroundColor: '#f8d7da', color: '#721c24' },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Daily Sadhana Card</h2>

            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="wake_up_time" style={styles.label}>Wake Up Time</label>
                    <input type="time" id="wake_up_time" name="wake_up_time" value={formData.wake_up_time} onChange={handleChange} required style={styles.input} />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="rounds_chanted" style={styles.label}>Rounds Chanted</label>
                    <input type="number" id="rounds_chanted" name="rounds_chanted" value={formData.rounds_chanted} onChange={handleChange} required style={styles.input} />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="hours_studied_college" style={styles.label}>Hours Studied (College Study)</label>
                    <input type="number" id="hours_studied_college" name="hours_studied_college" value={formData.hours_studied_college} onChange={handleChange} required style={styles.input} />
                </div>


                <div style={styles.formGroup}>
                    <label htmlFor="day_rest" style={styles.label}>Day Rest</label>
                    <input type="text" id="day_rest" name="day_rest" value={formData.day_rest} onChange={handleChange} required style={styles.input} />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="seva" style={styles.label}>Seva</label>
                    <input type="text" id="seva" name="seva" value={formData.seva} onChange={handleChange} required style={styles.input} />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="cleanliness" style={styles.label}>Cleanliness</label>
                    <select id="cleanliness" name="cleanliness" value={formData.cleanliness} onChange={handleChange} required style={styles.select}>
                        <option value="" disabled>Choose</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="book_reading_sp" style={styles.label}>Book Reading (Srila Prabhupada)</label>
                    <input type="text" id="book_reading_sp" name="book_reading_sp" value={formData.book_reading_sp} onChange={handleChange} required style={styles.input} />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="card_filled_at" style={styles.label}>Sadhana Card Filled At</label>
                    <input type="text" id="card_filled_at" name="card_filled_at" value={formData.card_filled_at} disabled style={{ ...styles.input, backgroundColor: '#e9ecef', cursor: 'not-allowed' }} />
                </div>

                <button type="submit" style={styles.submitButton}>Submit Sadhana</button>
            </form>

            {responseMsg && <div style={{ ...styles.responseMessage, ...(responseStatus === 'success' ? styles.successMessage : styles.errorMessage) }}>{responseMsg}</div>}
        </div>
    );
};

export default SadhanaCardForm;
