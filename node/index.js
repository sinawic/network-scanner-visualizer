import { networkInterfaces } from 'os'

import nmap from 'node-nmap'
nmap.nodenmap.nmapLocation = "nmap"; //default

const interfaces = networkInterfaces()

const { address, netmask, cidr } = interfaces.eth0[0]

console.log({ address, netmask, cidr })


var quickscan = new nmap.nodenmap.NmapScan(cidr, '-sS -A');

quickscan.on('complete', function (data) {
  console.dir(data);
});

quickscan.on('error', function (error) {
  console.log(error);
});

quickscan.startScan();