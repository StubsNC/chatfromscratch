import React from 'react';

const FormInput = ({ handleSubmit, newMessage, setNewMessage }) => {
    return (
        <form className="container h-100 input-group mt-3 mb-3 d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
            <input
                className="form-control border border-primary border-3 rounded me-3 py-4 px-5"
                placeholder="Type your message here..."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
            />
            <div className="input-group-append">
                <button className="btn btn-primary rounded px-4" type="submit">Send</button>
            </div>
        </form>
    );
};

export default FormInput;
