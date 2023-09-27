import { useState } from 'react'
import { defaultDataModal, defaultData, defaultDataSubModal } from './default-data'
import { useFetchCarritosChromebook, useFetchEstadosChromebook, useFetchChromebooksByArmario } from './fetch-data'
import { useActions } from './actions.js'
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

export const useFetchInitChromebooks = () => {
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [dataSubModal, setDataSubModal] = useState(defaultDataSubModal)
  const [data, setData] = useState(defaultData)
  const [updateData, setUpdateData] = useState([])
  const [events, setEvents] = useState([]); // Lista de eventos del calendario
    const [selectedSlot, setSelectedSlot] = useState(null); // Franja horaria seleccionada para agregar un evento
    const [isEventModalOpen, setEventModalOpen] = useState(false);
    const [eventFormData, setEventFormData] = useState({
        title: '',
        start: null,
        end: null,
    });

    const localizer = momentLocalizer(moment);

    const currentDate = new Date(); // Hora actual

  const toggle = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const onClose = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const subToggle = (_, subTitle, subComponent, subParams) => {
    setDataSubModal({
      ...dataSubModal,
      subOpen: !dataSubModal.subOpen,
      subTitle,
      subComponent,
      subParams
    })
  }

  const subOnClose = (_, subTitle, subComponent, subParams) => {
    setDataSubModal({
      ...dataSubModal,
      subOpen: !dataSubModal.subOpen,
      subTitle,
      subComponent,
      subParams
    })
  }

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleChangeData = formData => {
    setUpdateData(formData)
  }

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

  const FetchCarritosChromebook = useFetchCarritosChromebook()
  const FetchEstadosChromebook = useFetchEstadosChromebook()
  const FetchChromebooksByArmario = useFetchChromebooksByArmario({ dataModal })
  const Actions = useActions({ data, toggle, updateData, FetchChromebooksByArmario, subToggle })

  return {
    dataModal,
    dataSubModal,
    toggle,
    subToggle,
    FetchCarritosChromebook,
    FetchEstadosChromebook,
    FetchChromebooksByArmario,
    handleInputChange,
    Actions,
    onClose,
    subOnClose,
    handleChangeData,
    updateData,
    events,
    momentLocalizer,
    isEventModalOpen,
    handleEventFormChange,
    openEventModal,
    closeEventModal,
    Calendar,
    addEvent,
    currentDate,
    selectedSlot
  }
}
