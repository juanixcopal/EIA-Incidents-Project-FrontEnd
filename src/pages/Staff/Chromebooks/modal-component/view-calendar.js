import React, { useState } from 'react';
import {
    Grid,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    styled,
    tableCellClasses,
    Button,
    TextField,
} from '@mui/material';
import Loading from 'ui-component/loading';
import { gridSpacing } from 'store/constant';
import EditIcon from '@mui/icons-material/Edit';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReactModal from 'react-modal';

const localizer = momentLocalizer(moment);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.grey[500],
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const ViewCalendar = ({ useFetchInit }) => {
    const { FetchChromebooksByArmario, subToggle } = useFetchInit;
    const { chromebooksByArmario, loadingChromebooksByArmario } = FetchChromebooksByArmario;

    const [events, setEvents] = useState([]); // Lista de eventos del calendario
    const [selectedSlot, setSelectedSlot] = useState(null); // Franja horaria seleccionada para agregar un evento
    const [isEventModalOpen, setEventModalOpen] = useState(false);
    const [eventFormData, setEventFormData] = useState({
        title: '',
        start: null,
        end: null,
    });
    const currentDate = new Date(); // Hora actual

    const openEventModal = () => {
        setEventModalOpen(true);
    };

    const closeEventModal = () => {
        setEventModalOpen(false);
        // Restablecer el formulario del evento
        setEventFormData({
            title: '',
            start: null,
            end: null,
        });
    };

    const handleEventFormChange = (e) => {
        const { name, value } = e.target;
        setEventFormData({
            ...eventFormData,
            [name]: value,
        });
    };

    // Función para agregar un evento al calendario
    const addEvent = () => {
        if (eventFormData.title && eventFormData.start && eventFormData.end) {
            const newEvent = {
                title: eventFormData.title,
                start: moment(eventFormData.start, 'HH:mm').toDate(),
                end: moment(eventFormData.end, 'HH:mm').toDate(),
            };
            setEvents([...events, newEvent]);
            closeEventModal();
        } else {
            alert('Por favor, complete todos los campos del evento.');
        }
    };

    return (
        <>
            <Loading loading={loadingChromebooksByArmario} />

            {/* Modal para agregar evento */}
            <ReactModal
                isOpen={isEventModalOpen}
                onRequestClose={closeEventModal}
                contentLabel="Evento Modal"
                style={{
                    overlay: {
                        zIndex: 2000,
                    },
                    content: {
                        width: '25%',
                        height: '350px',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                }}
            >
                {/* Formulario para el evento */}
                <TextField
                    label="Título del evento"
                    name="title"
                    value={eventFormData.title}
                    onChange={handleEventFormChange}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    label="Hora inicial (HH:mm)"
                    type="time"
                    name="start"
                    value={eventFormData.start}
                    onChange={handleEventFormChange}
                    variant="outlined"
                    margin="normal"
                    style={{ width: '150px' }}
                    InputProps={{ style: { fontSize: '16px', padding: '5px', } }} // Estilos para el campo de entrada
                    InputLabelProps={{ style: { fontSize: '16px' }, shrink: true }} // Estilos para la etiqueta

                />
                <TextField
                    label="Hora final (HH:mm)"
                    type="time"
                    name="end"
                    value={eventFormData.end}
                    onChange={handleEventFormChange}
                    variant="outlined"
                    margin="normal"
                    style={{ width: '150px' }}
                    InputProps={{ style: { fontSize: '16px', padding: '5px', } }} // Estilos para el campo de entrada
                    InputLabelProps={{ style: { fontSize: '16px' }, shrink: true }} // Estilos para la etiqueta
                />
                <Button variant="contained" color="primary" onClick={addEvent}>
                    Guardar Evento
                </Button>
            </ReactModal>

            {/* Componente del calendario */}
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                views={{ month: true, week: true, day: true }}
                defaultView="week"
                selectable
                onSelectSlot={(slotInfo) => {
                    // Lógica cuando se selecciona un slot en el calendario
                    setSelectedSlot(slotInfo);
                    openEventModal();
                }}
                date={currentDate}
            />
        </>
    );
};

export default ViewCalendar;
