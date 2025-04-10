import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const LibraryComparisonTable = () => {
    const data = [
        {
            id: 1,
            library: 'Bootstrap',
            pros: 'Легко интегрируется, Широко используется, Быстрая разработка интерфейсов, Отличная документация',
            cons: 'Ограниченная гибкость, Проблемы с кастомизацией, Классические дизайны, Не подходит для сложных интерфейсов'
        },
        {
            id: 2,
            library: 'Material UI',
            pros: 'Современный стиль, Много компонентов, Кастомизация с помощью темы, Хорошая документация',
            cons: 'Может быть тяжеловесным, Большой размер, Не всегда подходит для всех проектов, Потребность в добавлении стилей для индивидуальности'
        },
        {
            id: 3,
            library: 'Ant Design',
            pros: 'Полный набор компонентов, Хорошая документация, Легкость в создании сложных интерфейсов, Современный и стильный дизайн',
            cons: 'Тяжелый для старых браузеров, Сложный для новичков, Проблемы с кастомизацией, Большой размер библиотеки'
        }
    ];

    return (
        <div>
            <TableContainer component={Paper}>
                <h1>Material UI</h1>
                <Table sx={{ border: 1, borderColor: 'grey.500' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ border: 1 }}>#</TableCell>
                            <TableCell sx={{ border: 1 }}>Библиотека</TableCell>
                            <TableCell sx={{ border: 1 }}>Плюсы</TableCell>
                            <TableCell sx={{ border: 1 }}>Минусы</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ border: 1 }}>{row.id}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{row.library}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{row.pros}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{row.cons}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <TextField
                    id="input-with-icon-textfield"
                    label="TextField"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        },
                    }}
                    variant="standard"
                />
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="With sx" variant="standard" />
                </Box>
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Contained</Button>
                </Stack>
            </Box>
        </div>
    );
};

export default LibraryComparisonTable;
