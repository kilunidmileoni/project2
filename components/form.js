import React from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({ addArticle }) {
  return (
    <View>
        <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(values, action) => {
            addArticle(values);
            action.resetForm();
        }}>
            {(props) => (
                <View>
                    <TextInput
                        value={props.values.name}
                        placeholder='Введите название'
                        onChangeText={props.handleChange('name')} />
                    <TextInput
                        value={props.values.anons}
                        multiline
                        placeholder='Введите анонс'
                        onChangeText={props.handleChange('anons')} />
                    <TextInput
                        value={props.values.full}
                        multiline
                        placeholder='Введите статью'
                        onChangeText={props.handleChange('full')} />
                    <TextInput
                        value={props.values.img}
                        placeholder='Укажите фото'
                        onChangeText={props.handleChange('img')} />
                    <Button title='Добавить' onPress={props.handleSubmit}/>
                </View>
            )}
        </Formik>
    </View>
  );
}

const styles = StyleSheet.create({

});
