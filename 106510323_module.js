/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team(s) H/A Goal %</font></H5>    
*/

/**
    This class extends the PEModule and initialise the moduleid, versionid.
*/
function TeamsHAGoalPercentModule_106510323 ()
{
    this.inheritFrom = PEModule;
    this.inheritFrom ();
    
    /* p106trading - mssqlv51 - p10651soccer - Team(s) H/A Goal % */
    this.ModuleId   = 106510323;
    this.VersionId  = 1.01;
}

/**
	Initializes objects namely PEProject, PEDocument, PEComponent, PETable, PEValidation & PEMessages.
*/
function Constructor_106510323 ()
{
    UDModule = new TeamsHAGoalPercentModule_106510323 ();

    UDModule.PROJ   = new PEProject ();
    UDModule.DOM    = new PEDocument ();
    UDModule.COMP   = new PEComponent ();
    UDModule.TBL    = new PETable ();   
    UDModule.VAL    = new PEValidation (); 
    UDModule.MSG    = new PEMessages ();
    UDModule.SPORT  = new PESport ();
    UDModule.MATH	= new PEMath ();    
    UDModule.DATE	= new PEDate ();

    UDModule.PROJEX	= new Trading_10651 ();
	UDModule.COLOR	= new Colors_10651 ();        
}