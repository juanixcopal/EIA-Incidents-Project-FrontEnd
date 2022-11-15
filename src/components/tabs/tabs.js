import React, { useState } from "react";
import Badge from '@mui/material/Badge';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';

import { useFetchInitFlats } from "../../hooks/flats/index";
import { useFetchInitDataReports } from "../../hooks/dataReports/index";

import ClassroomsCards from "../cards/classroomsCards.js";

const Tabs = () => {
    const { FetchFlats } = useFetchInitFlats();
    const { flats } = FetchFlats;

    const { FetchDataReports } = useFetchInitDataReports();
    const { reportsData } = FetchDataReports;

    const handleChanges = (event, newValue) => {
        setValue(newValue)
    }

    const [value, setValue] = useState(1);
    return (
        <TabContext value={String(value)}>
            <Box>
                <TabList onChange={handleChanges} aria-label="lab API tabs example">
                    {
                        flats.map((item) => {
                            const { id_planta, planta } = item
                            return (
                                <Tab
                                    label={
                                        <Badge badgeContent={reportsData.filter(e => e.estado === 'abierto' && e.id_planta === id_planta).length} color="primary">
                                            {planta}
                                        </Badge>
                                    }
                                    value={String(id_planta)}
                                    key={id_planta}
                                />
                            )
                        })
                    }
                </TabList>
            </Box>
            <ClassroomsCards />
        </TabContext>
    )
}

export default Tabs