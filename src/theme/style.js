import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
    },
    main: {
        flex: 1,
        marginHorizontal: 20
    },
    title: {
        fontSize: 28,
        color: Colors.active,
        fontFamily: 'Urbanist-Bold'
    },
    apptitle: {
        fontSize: 24,
        color: Colors.active,
        fontFamily: 'Urbanist-Bold'
    },
    b10: {
        fontSize: 10,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    r12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular',
    },
    b12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    r14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular',
    },
    b14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    r16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular'

    },
    b16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold'

    },
    r18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular'

    },
    b18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold'

    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Urbanist-Bold',
        color: Colors.active,
    },


    btn: {
        backgroundColor: Colors.default,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,

    },
    btntxt: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Urbanist-Bold'
    },
    indicator: {
        borderColor: '#BDBDBD',
        borderWidth: 1,
        padding: 4,
        borderRadius: 20,
        backgroundColor: '#BDBDBD',
        marginHorizontal: 5
    },


    shadow: {
        shadowColor: Colors.active,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: Colors.bg
    },

    txtinput: {
        paddingHorizontal: 20,
        color: Colors.disable,
        height: 50,
        borderRadius: 15,
        borderWidth: 1
    },

    radio: {
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        borderColor: Colors.bord,
        color: Colors.disable,
    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
    },

    divider1: {
        height: 1.5,
        backgroundColor: Colors.border,
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular'
    },

    btn1: {

        alignItems: 'center',
        // paddingVertical:15,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 55


    },
    btntxt1: {
        fontSize: 16,
        color: Colors.active,
        paddingLeft: 15,
        fontFamily: 'Urbanist-Regular'
    },

    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 15,
        paddingHorizontal: 10,
        height: 50,
        // flex: 1
    },

    verticaldivider: {
        height: '60%',
        width: 1,
    },

    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },
    btnoutline: {
        borderColor: Colors.bord,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 55,
        width: width / 4.5,
    },

    b3: {
        backgroundColor: Colors.secondary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#E5E7EB',
        borderWidth: 1
    },
    follow: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, backgroundColor: Colors.default
    },
    following: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, borderColor: Colors.default, borderWidth: 2
    },
    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: Colors.default,
        borderColor: Colors.default,
        color: Colors.secondary,
        fontFamily: 'Urbanist-Regular'
    },
    categoryText: {
        fontSize: 14,
        color: Colors.default,
        borderWidth: 2,
        borderColor: Colors.default,
        borderRadius: 20,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        fontFamily: 'Urbanist-Regular'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'space-between',

        // fontFamily:'Urbanist-Regular'
    },

}
);