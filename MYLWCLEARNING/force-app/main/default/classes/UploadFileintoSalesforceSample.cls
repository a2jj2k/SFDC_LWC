Public class UploadFileintoSalesforceSample{
public static blob fetchfile(String fileurl){

Http h = new Http();
HttpRequest req = new HttpRequest();

fileurl = fileurl.replace(' ', '%20');
//Set the end point URL
req.setEndpoint(fileurl);
req.setMethod('GET');
req.setHeader('Content-Type', 'application/pdf');
req.setCompressed(true);
req.setTimeout(60000);
HttpResponse res  = h.send(req);
system.debug('Response  ' + res.getBody());
blob Fileret = res.getBodyAsBlob();
return Fileret;
}

public static Id createAttachment(blob fileContent, String recordId, String fileType){
//for pdf files content type should be pdf
//for jpeg file content type should be image/jpeg
Attachment attach = new Attachment();
attach.ParentId = recordId;
attach.Name = 'FileAttached2.pdf';
attach.Body = fileContent;
attach.contentType = fileType;
insert attach;
return attach.id;
}
}