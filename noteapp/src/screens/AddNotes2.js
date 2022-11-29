import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import Header from '../component/Header.js';
import moment from "moment";
import { IconButton, TextInput, } from 'react-native-paper';
import * as yup from 'yup';
import FlatButton from '../component/Button.js';

const reviewSchema = yup.object({
    title: yup.string()
        .required(),
    description: yup.string()
        .required()
});

export default function AddNotes2({ navigation }) {
    const [date, setDate] = useState(moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'));

    return (
        <>
            <Header style={styles.headerText} titleText='Add a New Note' />
            <IconButton
                icon="close"
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
            />

            <View style={styles.container}>
                <Formik
                    initialValues={{ title: '', description: '', date: date }}
                    validationSchema={reviewSchema}
                    onSubmit={(values) => {
                        //console.log(values);
                        navigation.state.params.addNote(values);
                        navigation.goBack()
                    }}
                >
                    {props => (
                        <View>
                            <TextInput
                                placeholder='Add note title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                style={styles.title}
                                onBlur={props.handleBlur('title')}
                                theme={{ colors: { primary: '#7A7A7B' } }}

                                mode='outlined'
                            />
                            <Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text>
                            <TextInput
                                multiline
                                placeholder='Add note description'

                                onChangeText={props.handleChange('description')}
                                value={props.values.description}
                                mode="outlined"
                                style={styles.description}
                                scrollEnabled={true}
                                onBlur={props.handleBlur('description')}
                                theme={{ colors: { primary: '#7A7A7B' } }}
                            />
                            <Text style={styles.errorText}>{props.touched.description && props.errors.description}</Text>
                            <View date={date} setDate={setDate}>
                            </View>
                            {/* <FAB
                                style={styles.fab}
                                small
                                icon="check"
                                color='#fff'
                                onPress={props.handleSubmit}
                            /> */}
                            <FlatButton onPress={props.handleSubmit} text='Done' />
                        </View>
                    )}
                </Formik>
            </View>
        </>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        backgroundColor: '#222222',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        color: '#fff',
        borderColor: '#F4F4F7',
        fontSize: 18,
        borderRadius: 6,
    },
    description: {
        height: 200,
        fontSize: 16,
        color: '#fff',
        borderColor: '#F4F4F7',
        borderRadius: 6,
    },
    // fab: {
    //     position: 'absolute',
    //     margin: 20,
    //     right: 0,
    //     color: '#fff',
    //     bottom: 0,
    //     backgroundColor: '#222222'
    // },
    headerText: {
        color: '#fff'
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 5,
        // marginTop: 6,
        //textAlign: 'center',
    },

})
