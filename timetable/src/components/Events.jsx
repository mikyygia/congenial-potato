function Events({ event, color }) {
    return (
        <td className={"Event " + color}>
            <h5>{event}</h5>
        </td>
    );
}

export default Events;