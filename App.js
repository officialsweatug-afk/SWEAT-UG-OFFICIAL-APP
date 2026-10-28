import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

const CODES = [
"SWT-UG-9281-XL","SWT-UG-4402-MK","SWT-UG-7159-BZ","SWT-UG-1093-QP","SWT-UG-8834-VT",
"SWT-UG-3621-JW","SWT-UG-5578-DF","SWT-UG-2940-LR","SWT-UG-6317-NX","SWT-UG-8054-CH",
"SWT-UG-1122-AA","SWT-UG-2233-BB","SWT-UG-3344-CC","SWT-UG-4455-DD","SWT-UG-5566-EE",
"SWT-UG-6677-FF","SWT-UG-7788-GG","SWT-UG-8899-HH","SWT-UG-9900-II","SWT-UG-1010-JJ",
"SWT-UG-2020-KK","SWT-UG-3030-LL","SWT-UG-4040-MM","SWT-UG-5050-NN","SWT-UG-6060-OO",
"SWT-UG-7070-PP","SWT-UG-8080-QQ","SWT-UG-9090-RR","SWT-UG-1212-SS"
];

const MIXES = [
{ id: '1', title: 'UGANDA HITS 2026' },
{ id: '2', title: 'LATEST NEW UGANDA MUSIC' },
{ id: '3', title: 'UGANDAN NONSTOP MIX' },
{ id: '4', title: 'BIAKA FIK FAMEICA' },
{ id: '5', title: 'LATEST UGANDA HITS 2026' },
{ id: '6', title: 'NEW UGANDAN MIX MAY 2025' },
];

export default function App(){
  const [code,setCode]=useState(''); const [ok,setOk]=useState(false);
  const check=()=>{ if(CODES.includes(code.trim().toUpperCase())) setOk(true); else Alert.alert("Wrong Code","Contact admin. Use code with caution. Valid codes: 29"); };
  if(!ok) return (<View style={s.bg}><Text style={s.crown}>🦅</Text><Text style={s.t1}>SWEAT UG OFFICIAL</Text><Text style={s.t2}>OFFICIAL YOUTUBE APP</Text><Text style={s.t3}>ENTER ACTIVATION CODE</Text><TextInput style={s.input} placeholder="SWT-UG-XXXX-XX" placeholderTextColor="#666" value={code} onChangeText={setCode} autoCapitalize="characters"/><TouchableOpacity style={s.btn} onPress={check}><Text style={s.btnT}>ACTIVATE NOW</Text></TouchableOpacity><Text style={s.small}>Contact admin for code - 29 codes available</Text></View>);
  return (<View style={s.bg2}><Text style={s.head}>🔥 SWEAT UG - UGANDA HITS</Text><FlatList data={MIXES} numColumns={2} renderItem={({item})=><View style={s.card}><View style={s.img}><Text style={s.cardT}>{item.title}</Text></View></View>} /></View>);
}
const s=StyleSheet.create({
bg:{flex:1,backgroundColor:'#0A0A0A',alignItems:'center',justifyContent:'center',padding:20},
crown:{fontSize:80},t1:{color:'#FFC107',fontSize:22,fontWeight:'bold',marginTop:10},t2:{color:'#E53935',fontSize:11,marginTop:4},t3:{color:'white',fontSize:18,fontWeight:'bold',marginTop:40},
input:{backgroundColor:'#1A1A2E',color:'white',width:'90%',height:55,borderRadius:12,textAlign:'center',fontSize:18,marginTop:20,borderWidth:1,borderColor:'#FFC107'},
btn:{backgroundColor:'#E53935',width:'85%',height:55,borderRadius:28,alignItems:'center',justifyContent:'center',marginTop:30},btnT:{color:'white',fontWeight:'bold',fontSize:18},small:{color:'#888',marginTop:20,fontSize:12},
bg2:{flex:1,backgroundColor:'#111',paddingTop:50,padding:10},head:{color:'#FFC107',fontWeight:'bold',fontSize:16,marginBottom:15,textAlign:'center'},card:{flex:1,backgroundColor:'#222',margin:5,borderRadius:10,padding:10,height:120},img:{backgroundColor:'#FFC107',flex:1,borderRadius:6,alignItems:'center',justifyContent:'center'},cardT:{fontWeight:'bold',textAlign:'center',fontSize:11}
});
