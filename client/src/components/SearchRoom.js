// src/components/SearchRooms.js
import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Button,
    CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RoomCard from './RoomCard';
import axios from 'axios';

const SearchRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [locations, setLocations] = useState([]);

    const [filters, setFilters] = useState({
        searchTerm: '',
        searchField: 'name',
        sortBy: 'name',
        sortOrder: 'asc',
        location: 'all'
    });

    useEffect(() => {
        axios.get('https://rental-mgmt.onrender.com/api/rooms')
            .then(res => {
                setRooms(res.data);
                setFilteredRooms(res.data);
                // Extract unique locations
                const uniqueLocations = [...new Set(res.data.map(room => room.location))];
                setLocations(uniqueLocations);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching rooms:', err);
                setLoading(false);
            });
    }, []);

    const applyFilters = () => {
        let result = [...rooms];

        // Apply search
        if (filters.searchTerm) {
            result = result.filter(room => {
                const searchValue = room[filters.searchField]?.toString().toLowerCase();
                return searchValue?.includes(filters.searchTerm.toLowerCase());
            });
        }

        // Apply location filter
        if (filters.location !== 'all') {
            result = result.filter(room => room.location === filters.location);
        }

        // Apply sorting
        result.sort((a, b) => {
            let valueA = a[filters.sortBy]?.toString().toLowerCase();
            let valueB = b[filters.sortBy]?.toString().toLowerCase();

            if (filters.sortBy === 'availability_date') {
                valueA = new Date(a.availability_date);
                valueB = new Date(b.availability_date);
            }

            if (valueA < valueB) return filters.sortOrder === 'asc' ? -1 : 1;
            if (valueA > valueB) return filters.sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredRooms(result);
    };

    useEffect(() => {
        applyFilters();
    }, [filters]);

    const resetFilters = () => {
        setFilters({
            searchTerm: '',
            searchField: 'name',
            sortBy: 'name',
            sortOrder: 'asc',
            location: 'all'
        });
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
                Search Rooms
            </Typography>

            {/* Search and Filter Section */}
            <Card sx={{ mb: 4, p: 2 }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        {/* Search Field */}
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Search"
                                value={filters.searchTerm}
                                onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                                InputProps={{
                                    startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
                                }}
                            />
                        </Grid>

                        {/* Search By Dropdown */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Search By</InputLabel>
                                <Select
                                    value={filters.searchField}
                                    label="Search By"
                                    onChange={(e) => setFilters({ ...filters, searchField: e.target.value })}
                                >
                                    <MenuItem value="name">Name</MenuItem>
                                    <MenuItem value="location">Location</MenuItem>
                                    <MenuItem value="description">Description</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Sort By Dropdown */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Sort By</InputLabel>
                                <Select
                                    value={filters.sortBy}
                                    label="Sort By"
                                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                                >
                                    <MenuItem value="name">Name</MenuItem>
                                    <MenuItem value="location">Location</MenuItem>
                                    <MenuItem value="availability_date">Availability Date</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Sort Order */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Order</InputLabel>
                                <Select
                                    value={filters.sortOrder}
                                    label="Order"
                                    onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
                                >
                                    <MenuItem value="asc">Ascending</MenuItem>
                                    <MenuItem value="desc">Descending</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Location Filter */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Location</InputLabel>
                                <Select
                                    value={filters.location}
                                    label="Location"
                                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                                >
                                    <MenuItem value="all">All Locations</MenuItem>
                                    {locations.map((location, index) => (
                                        <MenuItem key={index} value={location}>
                                            {location}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Reset Button */}
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<RestartAltIcon />}
                                    onClick={resetFilters}
                                >
                                    Reset Filters
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Results Section */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="body1" color="text.secondary">
                    Found {filteredRooms.length} rooms
                </Typography>
            </Box>

            {/* Rooms Grid */}
            <Grid container spacing={3}>
                {filteredRooms.map((room) => (
                    <Grid item xs={12} sm={6} md={4} key={room._id}>
                        <RoomCard room={room} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchRoom;
