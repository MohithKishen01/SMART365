/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Statistics</font></H5>    
*/

/**
    This class extends the PEModule and initialise the moduleid, versionid.
*/
function TeamStatsModule_106510324 ()
{
    this.inheritFrom = PEModule;
    this.inheritFrom ();
    
    /* p106trading - mssqlv51 - p10651soccer - Team Statistics */
    this.ModuleId   = 106510324;
    this.VersionId  = 1.01;
}

/**
	Initializes objects namely PEProject, PEDocument, PEComponent, PETable, PEValidation & PEMessages.
*/
function Constructor_106510324 ()
{
    UDModule = new TeamStatsModule_106510324 ();

    UDModule.PROJ   = new PEProject ();
    UDModule.DOM    = new PEDocument ();
    UDModule.COMP   = new PEComponent ();
    UDModule.TBL    = new PETable ();   
    UDModule.VAL    = new PEValidation (); 
    UDModule.MSG    = new PEMessages ();
    UDModule.SPORT  = new PESport ();
    UDModule.MATH	= new PEMath ();
    
    UDModule.PROJEX	= new Trading_10651 ();
    UDModule.COLOR	= new Colors_10651 ();
}